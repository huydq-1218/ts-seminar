import React, { FormEvent } from "react";

interface User {
    id: number;
    name: string;
}

const userList: User[] = [
    { id: 1, name: "Foo" },
    { id: 2, name: "Bar" },
    { id: 3, name: "Baz" }
];

function truncateName(name: string) {
    return name.length > 30 ? `${name.substr(0, 30)}...` : name;
}

export default function App() {
    const [users, setUsers] = React.useState<User[]>([]);
    const [name, setName] = React.useState("");

    React.useEffect(() => {
        setUsers(userList);
    }, []);

    function handleAddUser(e: FormEvent) {
        e.preventDefault();
        let newUserList = [...users];
        newUserList.push({ id: new Date().getTime(), name });
        setUsers(newUserList);
    }

    function handleDeleteUserById(id: number) {
        setUsers(users.filter((u) => u.id !== id));
    }

    return (
        <div className="content">
            <div className="card ">
                <h3 className="title">Users with JS</h3>
                <form className="flex items-center" onSubmit={handleAddUser}>
                    <input
                        type="text"
                        className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                    <button className="btn-primary" onClick={handleAddUser}>Add</button>
                </form>

                <div className="mt-4">
                    <h4 className="section-ttl">List user</h4>
                    <div className="user-container scrollbar-track-blue-100 scrollbar-thumb-blue-500 scrollbar-thin">
                        {users.map((user) => (
                            <div key={user.id} className="user-item">
                                <div className="flex items-center flex-1">
                                    <div className="avatar">{user.name.charAt(0)}</div>
                                    <p className="ml-2 max-w-[200px]" title={user.name}>{truncateName(user.name)}</p>
                                </div>
                                <button className="btn-error" onClick={() => handleDeleteUserById(user.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
