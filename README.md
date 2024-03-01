# QRL Website 2020-2024 🚀

Deployed at [https://theqrl.org](https://theqrl.org) [![Netlify Status](https://api.netlify.com/api/v1/badges/1a6751f4-4aaf-4d1d-bc99-a350509edee8/deploy-status)](https://app.netlify.com/sites/jolly-aryabhata-426be5/deploys)

## Requirements

Built and deployed with HUGO_VERSION = "0.97.3".  Requires hugo installed (Homebrew recommended for Mac)

## Developing

Spawn a Hugo development server:

``` shell
hugo server -D -w
```

## Building /public folder for deployment

``` shell
hugo
```

## Testing for broken links

You'll want to install [linkinator](https://github.com/JustinBeckwith/linkinator)

```shell
npm install -g linkinator
```

Then run, from the root directory

```shell
linkinator
```

## Updating go modules (for QIPs)

When a QIP is changed, it's good to pull in any changes through a go module update

```shell
hugo mod get -u
```

## Caveats

### Crash of development server under MacOS?

This may be related to the large number of files processed quickly, and can be fixed with:

``` shell
sudo launchctl limit maxfiles 65535 200000
ulimit -n 65535
sudo sysctl -w kern.maxfiles=100000
sudo sysctl -w kern.maxfilesperproc=65535
```

