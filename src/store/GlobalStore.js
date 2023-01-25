import {makeAutoObservable} from "mobx"

export default class GlobalStore {
    constructor() {
        this._priorities = [
            {id: 1, name: "Низкий"},
            {id: 2, name: "Средний"},
            {id: 3, name: "Высокий"}
        ]
        this._tags = [
            {id: 1, name: "Разработка"},
            {id: 2, name: "Аналитика"},
            {id: 3, name: "Тестирование"}
        ]
        this._statuses = [
            {id: 1, name: "Открыт"},
            {id: 2, name: "В работе"},
            {id: 3, name: "Завершен"}
        ]
        this._teams = [
            {id: 1, name: "Команда 1", specialization: "Разработка", projectId: 1},
            {id: 2, name: "Команда 2", specialization: "Аналитика", projectId: 2},
            {id: 3, name: "Команда 3", specialization: "Тестирование", projectId: 3}
        ]
        this._projects = [
            {id: 1, description: "Какое-то описание 1", name: "Проект 1"},
            {id: 2, description: "Какое-то описание 2", name: "Проект 2"},
            {id: 3, description: "Какое-то описание 3", name: "Проект 3"},
            {id: 4, description: "Какое-то описание 4", name: "Проект 4"},
            {id: 5, description: "Какое-то описание 5", name: "Проект 5"},
        ]
        this._tasks = [
            {
                id: 1, dateStart: "2023-01-01", dateEnd: "2023-02-02", description: "Описание задачи 1",
                name: "Задача 1", creatorId: 1, executorId: 2, priorityId: 1, projectId: 1, sprintId: 1,
                statusId: 1, tagId: 1
            },
            {
                id: 2, dateStart: "2023-01-01", dateEnd: "2023-02-02", description: "Описание задачи 2",
                name: "Задача 2", creatorId: 1, executorId: 2, priorityId: 1, projectId: 1, sprintId: 1,
                statusId: 1, tagId: 1
            },
            {
                id: 3, dateStart: "2023-01-01", dateEnd: "2023-02-02", description: "Описание задачи 3",
                name: "Задача 3", creatorId: 1, executorId: 2, priorityId: 1, projectId: 1, sprintId: 1,
                statusId: 1, tagId: 1
            },
            {
                id: 4, dateStart: "2023-01-01", dateEnd: "2023-02-02", description: "Описание задачи 4",
                name: "Задача 4", creatorId: 1, executorId: 2, priorityId: 1, projectId: 1, sprintId: 1,
                statusId: 1, tagId: 1
            },
            {
                id: 5, dateStart: "2023-01-01", dateEnd: "2023-02-02", description: "Описание задачи 5",
                name: "Задача 5", creatorId: 1, executorId: 2, priorityId: 1, projectId: 1, sprintId: 1,
                statusId: 1, tagId: 1
            }
        ]
        makeAutoObservable(this)
    }

    get priorities() {
        return this._priorities;
    }

    set priorities(value) {
        this._priorities = value;
    }

    get tags() {
        return this._tags;
    }

    setTags(tags) {
        this._tags = tags;
    }

    get statuses() {
        return this._statuses;
    }

    setStatuses(statuses) {
        this._statuses = statuses;
    }

    get teams() {
        return this._teams;
    }

    setTeams(teams) {
        this._teams = teams;
    }

    get projects() {
        return this._projects;
    }

    setProjects(projects) {
        this._projects = projects;
    }

    get tasks() {
        return this._tasks;
    }

    setTasks(tasks) {
        this._tasks = tasks;
    }
}