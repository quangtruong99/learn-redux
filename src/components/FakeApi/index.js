import { Model, createServer } from "miragejs"
export const setupServer = () => {
    let server = createServer(
        {
            models: {
                todos: Model,
            },
            routes() {
                this.get("/api/todos", function (schema) {
                    return schema.todos.all();
                })
                this.post("/api/todos", function (schema, request) {
                    const payload = JSON.parse(request.requestBody)
                    if (payload) {
                        return schema.todos.create(payload)
                    } else {
                        return new Response(
                            400,
                            { some: "header" },
                            { errors: ["name cannot be blank"] }
                        )
                    }
                })
                this.post("/api/updateTodo", function (schema,request) {
                    const payload = JSON.parse(request.requestBody);
                    const currentTodo = schema.todos.find(payload.id);
                    currentTodo.update(payload);
                })
            },
        }
    )
}