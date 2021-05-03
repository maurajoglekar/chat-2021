export const getRoomsResponse = [{
        "name": "Tea Chats",
        "id": 0
    },
    {
        "name": "Coffee Chats",
        "id": 1
    }
];

export const getRoom0Response = {
    "name": "Tea Chats",
    "id": 0,
    "users": [
        "Ryan",
        "Nick",
        "Danielle"
    ]
};

export const getRoom1Response = {
    "name": "Coffee Chats",
    "id": 1,
    "users": [
        "Jessye"
    ]
};

export const getRoom0MessagesResponse = [{
        "name": "Ryan",
        "message": "ayyyyy",
        "id": "gg35545",
        "reaction": null
    },
    {
        "name": "Nick",
        "message": "lmao",
        "id": "yy35578",
        "reaction": null
    },
    {
        "name": "Danielle",
        "message": "leggooooo",
        "id": "hh9843",
        "reaction": null
    }
];

export const getRoom1MessagesResponse = [{
    "name": "Jessye",
    "message": "ayy",
    "id": "ff35278",
    "reaction": null
}];

export const addMessageResponse = {
    "name": "Maura",
    "message": "hello",
    "id": "YwQvwHENE",
    "reaction": null
};

export const roomsArray = [{
        ...getRoom0Response,
        "messages": getRoom0MessagesResponse
    },
    {
        ...getRoom1Response,
        "messages": getRoom1MessagesResponse
    }
];