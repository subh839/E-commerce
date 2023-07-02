import bcrypt from 'bcryptjs'
const Users = [
    
    {
        name : 'Subh Halder',
        email : 'subhasishhalder107@gmail.com',
        password : bcrypt.hashSync('subh2022',12),
        isAdmin : true
    },
    {
        name : 'Salaman khan',
        email : 'kgfklm@ump.ac.com',
        password : bcrypt.hashSync('salaam2022',12),
        isAdmin : true
    }
    
]
export default Users