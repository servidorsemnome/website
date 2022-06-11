<h1 align="center">SSN.gg website</h1>

<p align="center">
  The official website for SSN.gg, still in heavy development. This includes the landing page, authentication interface, user dashboard and more.
</p>

| ![](https://i.imgur.com/iD7O5KW.png) | ![](https://i.imgur.com/HsmcpHF.png) |
|-|-|

## Installing
**🚨 This requires [kratos-iam-svc](https://github.com/servidorsemnome/kratos-iam-svc) to be running to work properly.**

Add this line to your `/etc/hosts` (Linux) or `%WinDir%\System32\Drivers\Etc\hosts` (Windows) file:
```sh
127.0.0.1 local.ssn.gg
```

Install the dependencies:
```sh
yarn
```

Copy the `.env.example` file, name it `.env` and fill it.

## Running
Start the development server:
```sh
yarn dev
```

Open [local.ssn.gg:3000](http://local.ssn.gg:3000) with your browser of choice.
