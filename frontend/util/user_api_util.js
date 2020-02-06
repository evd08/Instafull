// export const fetchUsers = () => {
//     return $.ajax({
//         url: `api/users/`,
//         method: 'GET',
//         // error: (err) => console.log(err)
//     });
// };

export const fetchUserByUsername = (username) => {
    return $.ajax({
        url: `api/users/`,
        method: 'GET',
        data: username,
    });
};

export const fetchUser = (userId) => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: 'GET',
    });
};

export const fetchSearch = (username) => {
    return $.ajax({
        url: `api/search`,
        method: 'GET',
        data: username
    })
}

export const updateUser = (formData) => {
    return $.ajax({
        url: `api/users/${formData.get("user[id]")}`,
        method: `PATCH`,
        data: formData,
        contentType: false,
        processData: false,
    });
};

