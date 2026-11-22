# devops-demo

DevOps gyakorlóprojekt alapvető automatizálással (CI/CD), konténerizációval (`Dockerfile`) és GitHub Container Registry publikálással.

## Mit valósít meg a repó?

- **CI (`.github/workflows/ci.yml`):** Minden `push` és `pull_request` esetén lefuttatja az alkalmazás tesztjeit (`npm test`).
- **CD (`.github/workflows/cd.yml`):** A `main` ágra kerülő változtatásokból felépíti a Docker image-et, és feltölti a GHCR-be.
- **Konténer (`docker/Dockerfile`):** Többlépcsős (multi-stage) Node.js Alpine image nem-`root` (`node`) felhasználóval.
- **Alkalmazás (`app/`):** Egyszerű HTTP-szerver `/health` állapotellenőrző végponttal és beépített node teszttel.

## Mappaszerkezet

- `.github/workflows/` – GitHub Actions CI/CD munkafolyamatok
- `app/` – Alkalmazáskód (`index.js`), tesztek (`index.test.js`) és `package.json`
- `docker/` – `Dockerfile` a konténer felépítéséhez
- `scripts/` – Segédszkriptek (pl. egészségellenőrzés)
- `terraform/` – Infrastruktúra mint kód (IaC) helye későbbi bővítéshez

## Helyi futtatás és tesztelés

```bash
cd app
node index.js
