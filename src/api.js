import db from "@/db"

class REST {
    findUserByEmail(email) {
        return db.users.find(user => user.email === email)
    }

    _getId() {
        return db.users[db.users.length - 1].id + 1
    }

    createUser(user) {
        db.users.push({
            id: this._getId(),
            role: 1,
            ...user
        })
    }

    getUsers() {
        return db.users
    }

    removeUser(id) {
        db.users = db.users.filter(user => user.id !== id)
    }
}

export default new REST()