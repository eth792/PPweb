# Authenticator Privacy Policy

**Last Updated: July 29, 2025**

## Overview

Authenticator is an open-source two-factor authentication code generator browser extension. This privacy policy explains how we collect, use, and protect your personal information.

## Permission Usage Description

### Required Permissions (Cannot be revoked)

#### 1. activeTab (Active Tab Access)
- **Purpose**: Read current webpage content to auto-fill verification codes
- **Data Collection**: Obtain current tab's URL and webpage title for matching corresponding verification code accounts
- **Data Storage**: Not stored, only used for instant matching and filling

#### 2. storage (Storage)
- **Purpose**: Locally store your verification code account information and application settings
- **Data Collection**: Verification code keys, account names, issuer information, application settings
- **Data Storage**: All data is encrypted and stored locally, not uploaded to any server

#### 3. identity (Identity Authentication)
- **Purpose**: Used for OAuth authentication with Google Drive, OneDrive, and Dropbox
- **Data Collection**: Only collect necessary authentication tokens
- **Data Storage**: Tokens are encrypted and stored locally for cloud backup functionality

#### 4. alarms (Timers)
- **Purpose**: Implement auto-lock functionality, periodically clear cached decryption passwords
- **Data Collection**: None
- **Data Storage**: None

#### 5. scripting (Script Injection)
- **Purpose**: Inject content scripts into webpages to implement auto-fill functionality
- **Data Collection**: Obtain verification code input field information from pages
- **Data Storage**: Not stored, only used for instant operations

### Optional Permissions (Can be revoked)

#### 6. clipboardWrite (Clipboard Write)
- **Purpose**: Copy verification codes to clipboard
- **Data Collection**: None
- **Data Storage**: None
- **Revocation Impact**: Unable to use copy verification code functionality

#### 7. contextMenus (Context Menus)
- **Purpose**: Add quick actions to right-click menu
- **Data Collection**: None
- **Data Storage**: None
- **Revocation Impact**: Unable to use right-click menu shortcut functions

### Host Permissions (Optional)

#### 8. https://www.google.com/*
- **Purpose**: Synchronize time to ensure verification code accuracy
- **Data Collection**: Only obtain accurate time information
- **Data Storage**: None

#### 9. https://*.dropboxapi.com/*
- **Purpose**: Dropbox cloud backup functionality
- **Data Collection**: None (only upload encrypted backup files)
- **Data Storage**: Backup files stored in your Dropbox account

#### 10. https://www.googleapis.com/*
- **Purpose**: Google Drive cloud backup functionality
- **Data Collection**: None (only upload encrypted backup files)
- **Data Storage**: Backup files stored in your Google Drive

#### 11. https://accounts.google.com/o/oauth2/revoke
- **Purpose**: Google OAuth token revocation
- **Data Collection**: None
- **Data Storage**: None

#### 12. https://graph.microsoft.com/me/*
- **Purpose**: OneDrive cloud backup functionality
- **Data Collection**: None (only upload encrypted backup files)
- **Data Storage**: Backup files stored in your OneDrive

#### 13. https://login.microsoftonline.com/common/oauth2/v2.0/token
- **Purpose**: Microsoft OAuth authentication
- **Data Collection**: Only collect necessary authentication tokens
- **Data Storage**: Tokens are encrypted and stored locally

## Data Collection and Usage

### Types of Information Collected
1. **Verification Code Account Information**: Account names, issuers, keys (encrypted storage)
2. **Application Settings**: Themes, languages, auto-lock time, and other user preference settings
3. **Cloud Service Tokens**: OAuth tokens for backup functionality (encrypted storage)

### How Information is Used
- Generate two-factor authentication codes
- Auto-fill verification codes to corresponding websites
- Cloud backup and synchronization (optional)
- Maintain application settings and preferences

## Data Security

### Encryption Protection
- All sensitive data (verification code keys, cloud tokens) are encrypted using AES-256
- Master password is not stored, only used to generate encryption keys
- Backup files are encrypted before uploading to cloud services

### Local Storage
- All data is stored only on your device
- No data is transmitted to any servers except for backups you actively create

## Third-Party Services

### Cloud Backup Services
When you choose to enable cloud backup, we interact with the following service providers:
- **Google Drive**: Store encrypted backup files
- **Dropbox**: Store encrypted backup files
- **OneDrive**: Store encrypted backup files

Each of these services' privacy policies apply to how they handle your data.

### Time Synchronization
To ensure verification code accuracy, the application may access Google's time servers.

## User Control

### Permission Management
- You can revoke optional permissions at any time in extension settings
- Revoking permissions may affect the use of related functions

### Data Deletion
- You can delete all stored verification code accounts at any time
- Uninstalling the extension will delete all locally stored data
- Cloud backups need to be manually deleted from the corresponding cloud storage services

## Children's Privacy

This service is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13.

## Policy Updates

We may update this privacy policy from time to time. Significant changes will be notified through extension updates.

## Contact Us

If you have any questions about this privacy policy, please contact us through:
- GitHub Issues: https://github.com/Authenticator-Extension/Authenticator/issues

---

**Note**: This privacy policy is generated based on code analysis of Authenticator extension v8.0.2. Actual permission usage may vary with version updates. Please refer to the latest version for accuracy. 