// export const fetchUsers = () => {
//     return $.ajax({
//         url: `api/users/`,
//         method: 'GET',
//         // error: (err) => console.log(err)
//     });
// };

export const fetchUserByUsername = (username) => {
    // debugger
    return $.ajax({
        url: `api/users/`,
        method: 'GET',
        data: username,
        // error: (err) => console.log(err)
    });
};

export const fetchUser = (userId) => {
    // debugger
    return $.ajax({
        url: `api/users/${userId}`,
        method: 'GET',
        // error: (err) => console.log(err)
    });
};

export const fetchSearch = (username) => {
    // debugger
    return $.ajax({
        url: `api/search`,
        method: 'GET',
        data: username
    })
}

export const updateUser = (formData) => {
    // debugger
    return $.ajax({
        url: `api/users/${formData.get("user[id]")}`,
        method: `PATCH`,
        data: formData,
        contentType: false,
        processData: false,
    });
};

