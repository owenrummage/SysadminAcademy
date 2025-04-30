# Installing Apache

This guide will walk you through the steps to install Apache on both Debian-based and RHEL-based systems.

## Supported Distributions

| Distribution  | Supported |
|---------------|-----------|
| Debian 12     | ✅         |
| Debian 11     | ✅         |
| Ubuntu 22.04  | ✅         |
| Ubuntu 24.04  | ✅         |
| RHEL 9        | ✅         |
| RHEL 8        | ✅         |

## Steps to Install Apache

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

### 2. **Install Apache**

#### Debian-based Systems:
Install Apache using the `apt` package manager:
```bash
sudo apt install apache2 -y
```

#### RHEL-based Systems:
Install Apache using the `dnf` package manager:
```bash
sudo dnf install httpd -y
```

### 3. **Start and Enable Apache**

#### Debian-based Systems:
Ensure Apache starts automatically on boot and start the service:
```bash
sudo systemctl enable apache2
sudo systemctl start apache2
```

#### RHEL-based Systems:
Similarly, enable and start the Apache service:
```bash
sudo systemctl enable httpd
sudo systemctl start httpd
```

### 4. **Verify Installation**

#### Debian-based Systems:
Check if Apache is running:
```bash
sudo systemctl status apache2
```

#### RHEL-based Systems:
Verify the status of the Apache service:
```bash
sudo systemctl status httpd
```

For both systems, you can also verify the installation by opening a web browser and navigating to `http://your_server_ip`. You should see the default Apache welcome page.

### 5. **Allow HTTP and HTTPS Traffic**

#### Debian-based Systems:
Update your firewall rules to allow HTTP and HTTPS traffic:
```bash
sudo ufw allow 'Apache Full'
```

#### RHEL-based Systems:
Use `firewalld` to allow HTTP and HTTPS traffic:
```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## Conclusion

You have successfully installed Apache on your Debian-based or RHEL-based system. You can now proceed to configure it for your specific needs.
