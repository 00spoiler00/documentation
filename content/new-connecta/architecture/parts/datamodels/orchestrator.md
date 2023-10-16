namespace OrchestrationService {

    class Customer {
        int Id Pk
    }

    class Recipe {
        int Id Pk
        int CustomerId
        string Name
    }

    class Cook {
        int Id Pk
        datetime started_at
        datetime end_at
    }

    class Cook_Step {
        int Id Pk
        int RecipeStepId
        datetime started_at
        datetime end_at
        int PayloadId
    }

    class CooksStep_Payload {
        int Id Pk
        int Cook_Id
        int PayloadId
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
        int ChannelId
        int WorkerlId
        int WorkerSetupId
        int Order
    }

    class Payload {
        int Id Pk
        string blob_id PK
        enum type "In/Mid/Out"
        datetime created_at
    }

}

Customer "1" -- "0..n" Recipe
Recipe "1" -- "0..n" Recipe_Step
Recipe_Step "1" -- "0..n" Channel
Recipe_Step "1" -- "0..1" Worker
Recipe "1" -- "0..n" Cook
Cook "1" -- "0..n" Cook_Step
Cook_Step "0..n" -- "1" Recipe_Step

Cook_Step "1" -- "1..n" CooksStep_Payload
CooksStep_Payload "1" -- "1" Payload
