export const fetchUsers = () => {
    return $.ajax({
        url: `api/users/`,
        method: 'GET',
        // error: (err) => console.log(err)
    });
};

export const fetchUser = (userId) => {
    return $.ajax({
        url: `api/users/${userId}`,
        method: 'GET',
        // error: (err) => console.log(err)
    });
};

export const updateUser = (formData) => {
    debugger
    return $.ajax({
        url: `api/users/${formData.get("user[id]")}`,
        method: `PATCH`,
        data: formData,
        contentType: false,
        processData: false,
    });
};

// export const updateUserAvatar = (id, data) => {
//     return $.ajax({
//         url: `api/users/${id}`,
//         method: `PATCH`,
//         data: data,
//         contentType: false,
//         processData: false
//     });
// };
