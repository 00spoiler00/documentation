namespace OrchestrationService {

    class Customer {
        int Id Pk
    }

    class Recipe {
        int Id Pk
        string Name
    }

    class Cook {
        int Id Pk
        datetime started_at
        datetime end_at
    }

    class Cook_Step {
        int Id Pk
        datetime started_at
        datetime end_at
        json payload
    }

    class Channel {
        int Id Pk
        string Name
    }

    class Worker {
        int Id Pk
        string Name
        string Queue
    }

    class Recipe_Step {
        int Id Pk
        int Order
        enum Type "Copy/Zip/Notify/Work/..."
        json payload
    }

    class Worker {
        <<Abstract>>
    }

}

Customer "1" -- "0..n" Recipe
Recipe "1" -- "0..n" Recipe_Step
Recipe_Step "1" -- "0..n" Channel
Recipe_Step "1" -- "0..1" Worker
Recipe "1" -- "0..n" Cook
Cook "1" -- "0..n" Cook_Step
Cook_Step "0..n" -- "1" Recipe_Step
