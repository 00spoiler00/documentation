# New Connecta documentation

## Main sections

- [Core Architecture (WIP)](./architecture/index.md)
- [ClassMap (WIP)](./classmap.md)

## OnWork

- Core Architecture
- Task dependency tree to accomplish the **CU Configuration via NewCloud** [cu-roadmap]
- General structural classes of the whole project to determine prpoper infrastructures. (Define couplings and decouplings) [schema]

## TODOs

### General

- Meet with Esteve to determine NewCloud capabilities, and where and how will we reside there.
  - Components organization
  - Expose map proposal
  - Will we have the ability to fetch the angular components from APIs? (Check CGPT for this)

### Core Architecture

- Interface for fn extraction (GenerateBlob->Launch->Await->Fetch) Must use a 1 step pipeline.
- Add the Channel workers to the architectue
- Add the blob creator
- Determine projects & solutions structures
  - How do the projects & solutions group?
  - MonoRepo
  - What is a uService, a Library, etc.
