# Market flash ETL document

::: danger NOTE!!! :exclamation:
This document is just to exemplify a customized documentation that uses the dynamically generated RecordSchemas that will be always updated as the code evolves, while living inside a customized document.
:::

## User Registration Process

Our system follows a streamlined approach for user registrations. The registration process consists of a series of steps that ensure security and simplicity for all users.

### Registration Flow

The following flowchart describes the user registration process:

```mermaid
graph TD
A[Start] --> B[Enter User Details]
B --> C{Valid Email?}
C -->|Yes| D[Send Verification Email]
C -->|No| E[Show Error]
D --> F{Click Verification Link?}
F -->|Yes| G[Account Activated]
F -->|No| H[Resend Email Option]
```
<!--@include: ./_dynamicRecordDefinitions/ActividadesAcciones.md-->

## Product Purchase Flow

```mermaid
graph TD
A[Start] --> B[Select Product]
B --> C[Add to Cart]
C --> D{Checkout?}
D -->|Yes| E[Enter Payment Details]
D -->|No| F[Continue Shopping]
E --> G[Payment Verified]
```

<!--@include: ./_dynamicRecordDefinitions/ActividadesAgente.md-->

## Ticket Booking Process

```mermaid
graph TD
A[Start] --> B[Select Event/Show]
B --> C[Choose Seat & Date]
C --> D[Make Payment]
D --> E[Receive E-Ticket]
```

<!--@include: ./_dynamicRecordDefinitions/ActividadesCuestionariosData.md-->

## Feedback Submission Flow

```mermaid
graph TD
A[Start] --> B[Access Feedback Form]
B --> C[Enter Feedback Details]
C --> D[Submit]
D --> E[Thank you for Feedback]
```


<!--@include: ./_dynamicRecordDefinitions/ActividadesData.md-->

## User Login Process

```mermaid
graph TD
A[Start] --> B[Enter Username & Password]
B --> C{Credentials Valid?}
C -->|Yes| D[Access Dashboard]
C -->|No| E[Error: Retry Login]
```

<!--@include: ./_dynamicRecordDefinitions/ActividadesGestores.md-->
