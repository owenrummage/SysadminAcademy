# Installing NGINX

This guide will walk you through the steps to install NGINX on both Debian-based and RHEL-based systems.

## Supported Distributions

| Distribution  | Supported |
|---------------|-----------|
| Debian 12     | ✅         |
| Debian 11     | ✅         |
| Ubuntu 22.04  | ✅         |
| Ubuntu 24.04  | ✅         |
| RHEL 9        | ✅         |
| RHEL 8        | ✅         |

## Steps to Install NGINX

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

### 2. **Install NGINX**

#### Debian-based Systems:
Install NGINX using the `apt` package manager:
```bash
sudo apt install nginx -y
```

#### RHEL-based Systems:
Install NGINX using the `dnf` package manager. First, ensure the EPEL repository is enabled:
```bash
sudo dnf install epel-release -y
sudo dnf install nginx -y
```

### 3. **Start and Enable NGINX**

#### Debian-based Systems:
Ensure NGINX starts automatically on boot and start the service:
```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

#### RHEL-based Systems:
Similarly, enable and start the NGINX service:
```bash
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 4. **Verify Installation**

#### Debian-based Systems:
Check if NGINX is running:
```bash
sudo systemctl status nginx
```

#### RHEL-based Systems:
Verify the status of the NGINX service:
```bash
sudo systemctl status nginx
```

For both systems, you can also verify the installation by opening a web browser and navigating to `http://your_server_ip`. You should see the default NGINX welcome page.

### 5. **Allow HTTP and HTTPS Traffic**

#### Debian-based Systems:
Update your firewall rules to allow HTTP and HTTPS traffic:
```bash
sudo ufw allow 'Nginx Full'
```

#### RHEL-based Systems:
Use `firewalld` to allow HTTP and HTTPS traffic:
```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## Conclusion

You have successfully installed NGINX on your Debian-based or RHEL-based system. You can now proceed to configure it for your specific needs.