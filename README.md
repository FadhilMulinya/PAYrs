# PAYrs - HR Payment Solution on Lisk

## Overview

PAYrs is a cutting-edge payment solution tailored for HR departments, leveraging the Lisk blockchain for secure and efficient transactions. It facilitates both single and batch payments, streamlining various HR payment processes from individual reimbursements to bulk salary disbursements.

## Features

- **Lisk Blockchain Integration**: Utilizes Lisk's fast and cost-effective blockchain for all transactions
- **Single Transactions**: Process individual payments quickly on the Lisk network
- **Batch Transactions**: Send multiple payments in one transaction, optimizing for Lisk's block time and fee structure
- **CSV Import**: Upload payment details through CSV files for efficient batch processing
- **Lisk Wallet Integration**: Secure wallet connection for transaction signing
- **Transaction Tracking**: Real-time monitoring of payment status on the Lisk blockchain
- **HR-Focused Interface**: Intuitive design catering to HR payment workflows

## Technology Stack

- Next.js for the frontend framework
- Lisk SDK for blockchain interactions
- Smart Contracts deployed on Lisk for secure payment processing
- Lisk wallet for transaction signing
- Foundry for smart contract development and testing (adapted for Lisk compatibility)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager
- Lisk wallet (compatible with the application)
- Access to Lisk testnet or mainnet (as configured)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FadhilMulinya/PAYrs.git
   cd PAYrs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add necessary configuration:
   ```
   NEXT_PUBLIC_LISK_CONTRACT_ADDRESS=your_lisk_contract_address
   NEXT_PUBLIC_LISK_NETWORK=mainnet_or_testnet
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage

### Single Transactions

1. Connect your Lisk wallet
2. Navigate to the Single Payment section
3. Enter recipient Lisk address and amount
4. Confirm the transaction in your Lisk wallet

### Batch Transactions

1. Prepare a CSV file with the following columns:
   - recipient (Lisk address)
   - amount
   - currency (LSK)
2. Navigate to the Batch Payment section
3. Upload your CSV file
4. Review the transaction details
5. Confirm the batch transaction in your Lisk wallet

## Smart Contract Development

The project uses a modified version of Foundry compatible with Lisk for smart contract development. To work with smart contracts:

1. Set up the Lisk development environment as per the official Lisk documentation
2. Build contracts:
   ```bash
   lisk-core compile
   ```

3. Run tests:
   ```bash
   lisk-core test
   ```

## Lisk Network Configuration

PAYrs is currently deployed on the Lisk [mainnet/testnet]. Ensure your Lisk wallet is connected to the correct network before initiating transactions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Security

- All smart contracts are thoroughly tested and audited for Lisk compatibility
- Lisk's robust consensus mechanism ensures transaction integrity
- Input validation and sanitization implemented throughout the application

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers directly. For Lisk-specific inquiries, refer to the official Lisk documentation and community channels.

## Acknowledgments

- Lisk Foundation for the blockchain infrastructure
- Lisk community for continuous support and resources
- Next.js team for the frontend framework
- The broader blockchain community for inspiration and innovation