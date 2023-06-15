import { reactive } from "vue";

export const store = reactive({
    imgStartUrl: 'http://localhost:8000',
    apiUrl: 'http://127.0.0.1:8000/api',
    projects: [],
    project: [],
    currentPage: 1,
    lastPage: null,
    headerLinks: [
        {
            text: "Home",
            routeName: "home",
        },
        {
            text: "Progetti",
            routeName: "projects",
        },
    ]
})