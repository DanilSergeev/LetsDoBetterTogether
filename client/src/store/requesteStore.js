import { makeAutoObservable } from "mobx"


export default class RequesteStore {
    constructor() {
        this._status = [
            { id: 1, titleStatus: "Новая" },
            { id: 2, titleStatus: "Отклонено" },
            { id: 3, titleStatus: "Выполнино" },
        ]
        this._category = [
            { id: 1, title: "Котики" },
            { id: 2, title: "Дороги" },
            { id: 3, title: "Мусор" }
        ]
        this._requests = [
            { id: 1, title: "Кот на дереве", description: "Кот на дерево залез, Но обратно слезть не смог. Хоть стекло я и разбил, Но зато коту помог. Кот на дерево залез, Так бывает у котов. Хоть я дерево свалил, Но скажу вам что зато…  Зато я спас кота! Я выполнил приказ! И так бы поступил, На моем месть каждый! Котика я спас, Выполнил приказ! Ведь выполнить приказ Первостепенно важно. Так бывает иногда, Что залез и слезть не можешь. Ты сидишь и ждешь когда Кто-нибудь тебе поможет. Так бывает иногда, У людей и у котов. Хоть я дров и наломал, Но скажу вам что зато… Зато я спас кота! Я выполнил приказ! И так бы поступил, На моем месть каждый! Котика я спас, Выполнил приказ! Ведь выполнить приказ Первостепенно важно.", file: "testMain.jpg", fileAftar: "test.jpg", createdAt: "2023-01-27 12:28:02.583+03", updatedAt: "2023-01-27 12:28:02.583+03", CategorysId: 1, StatusId: 1 },
            { id: 2, title: "Мусор по всей улице", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, eos iusto at voluptates adipisci odio autem alias itaque quae excepturi, dolore quos placeat nesciunt iure veniam corporis ad! Accusantium, ab?", file: "testMain.jpg", fileAftar: "test.jpg", createdAt: "2023-01-27 12:28:02.583+03", updatedAt: "2023-01-27 12:28:02.583+03", CategorysId: 3, StatusId: 3 },
            { id: 3, title: "Еще одна статья", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, eos iusto at voluptates adipisci odio autem alias itaque quae excepturi, dolore quos placeat nesciunt iure veniam corporis ad! Accusantium, ab?", file: "testMain.jpg", fileAftar: "noimage.jpg", createdAt: "2023-01-27 12:28:02.583+03", updatedAt: "2023-01-27 12:28:02.583+03", CategorysId: 2, StatusId: 3 },
        ]
        makeAutoObservable(this)
    }


    setStatus(status){
        this._status = status
    }
    setCategory(category){
        this._category = category
    }
    setRequests(requests){
        this._requests = requests
    }


    get statuss() {
        return this._status
    }
    get categoryss() {
        return this._category
    }
    get requestss() {
        return this._requests
    }

}