# Polygon NFT Gallery

This is an app that will take a contract address and display any erc720 or erc1155 NFTs related to that contract.

---

## Requirements

- Node `v16.13.0`
- Yarn `v1.22.17`
- [Alchemy Account](https://www.alchemy.com) - For `VITE_ALCHEMY_API`

---

## Local Setup

### 1 - Install dependencies

```bash
yarn;
```

### 2 - Copy and fill in environment variables file

```bash
cp .env.example .env;
```

### 3 - Start App

```bash
yarn dev;
```

---

## Interactions

A - When on the root `http://localhost:3000` you can enter a contract address and click `Submit`

B - You can also go a contract address by going to `http://localhost:3000/CONTRACT_ADDRESS_HERE`
