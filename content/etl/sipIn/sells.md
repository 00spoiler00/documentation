# Using templates to create a Customized ETL documentation

::: danger WARNING!
This is just to exemplify the usage of templates that group serveral dynamic RecordDefinitions that can be inserted as a single line, they will keep updated as the records change while keeping the other parts of the documentation unchanged
:::

# Data Extraction Guide

To ensure the seamless integration of external data into our company's system, it's crucial to follow the correct data extraction procedures. This guide provides a step-by-step overview of the process.

## Pre-requisites

Before extracting data:

- Ensure you have the right permissions to access the data source.
- Familiarize yourself with the source system's data structure.
- Backup the source system to prevent any data loss during extraction.


## Steps

### 1. **Identify Data Sources**

Identify the systems, databases, or files from which data needs to be extracted. This could be:
  
- Databases (e.g., MySQL, PostgreSQL, Oracle)
- Flat files (e.g., CSV, Excel, JSON)
- APIs or web services

### 2. **Define Extraction Criteria**

Decide on the specific data sets or tables you need. Filter out irrelevant data to ensure efficient extraction. Consider the following:
  
- Date ranges
- Specific fields or columns
- Relevant conditions or filters


### 3. **Choose Extraction Tools**

Depending on the source and nature of the data, choose the right extraction tool. Some common tools include:

- **ETL Tools**: Talend, Informatica, etc.
- **Custom Scripts**: Python scripts using libraries like Pandas or SQLAlchemy, Node.js scripts, etc.
- **Database Specific Tools**: Tools like `mysqldump` for MySQL databases.

### 4. **Perform Extraction**

Execute the extraction process, making sure to:

- Monitor the extraction to catch any errors or issues.
- Validate a subset of the extracted data to ensure accuracy.

### 5. **Save Extracted Data**

Store the extracted data in an intermediary location/format suitable for insertion into our system, e.g., a CSV file, a staging database, etc.

## Post-Extraction

Once data is extracted:

1. **Verify the Integrity**: Ensure no data corruption occurred during the extraction process.
2. **Clean & Transform**: Before inserting into our system, data might need cleaning (removing duplicates, handling missing values) or transformation (changing data types, formatting).

With the data correctly extracted and prepared, you're ready to proceed with the loading phase into our system.

## Support

If you face any challenges during extraction or have questions about the process, please reach out to our technical support team.


## Available Records

<!--@include: ./_sells_records_template.md -->