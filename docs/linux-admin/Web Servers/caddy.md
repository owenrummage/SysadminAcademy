# Installing Caddy

This guide will walk you through the steps to install Caddy on both Debian-based and RHEL-based systems.

## Supported Distributions

| Distribution  | Supported |
|---------------|-----------|
| Debian 12     | ✅         |
| Debian 11     | ✅         |
| Ubuntu 22.04  | ✅         |
| Ubuntu 24.04  | ✅         |
| RHEL 9        | ✅         |
| RHEL 8        | ✅         |

## Steps to Install Caddy

### 1. **Update the Package Index**

#### Debian-based Systems:
Run the following command to ensure your package index is up to date:
```bash
sudo apt update
```

#### RHEL-based Systems:
Update the package index using `dnf`:
```bash
sudo dnf makecache
```

### 2. **Install Caddy**

#### Debian-based Systems:
Install Caddy using the official repository:
```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy -y
```

#### RHEL-based Systems:
Install Caddy using the official repository:
```bash
sudo dnf install 'dnf-command(config-manager)' -y
sudo dnf config-manager --add-repo https://dl.cloudsmith.io/public/caddy/stable/rpm.repo
sudo dnf install caddy -y
```

### 3. **Start and Enable Caddy**

#### Debian-based Systems:
Ensure Caddy starts automatically on boot and start the service:
```bash
sudo systemctl enable caddy
sudo systemctl start caddy
```

#### RHEL-based Systems:
Similarly, enable and start the Caddy service:
```bash
sudo systemctl enable caddy
sudo systemctl start caddy
```

### 4. **Verify Installation**

#### Debian-based Systems:
Check if Caddy is running:
```bash
sudo systemctl status caddy
```

#### RHEL-based Systems:
Verify the status of the Caddy service:
```bash
sudo systemctl status caddy
```

For both systems, you can also verify the installation by opening a web browser and navigating to `http://your_server_ip`. You should see the default Caddy welcome page.

### 5. **Allow HTTP and HTTPS Traffic**

#### Debian-based Systems:
Update your firewall rules to allow HTTP and HTTPS traffic:
```bash
sudo ufw allow 'Caddy'
```

#### RHEL-based Systems:
Use `firewalld` to allow HTTP and HTTPS traffic:
```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## Conclusion

You have successfully installed Caddy on your Debian-based or RHEL-based system. You can now proceed to configure it for your specific needs.