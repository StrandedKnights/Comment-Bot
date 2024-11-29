
const fs = require("fs");
const readline = require("readline");
const axios = require("axios");
const chalk = require("chalk");

// Setup Readline for interactive prompts
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Helper: Prompt User
function promptUser(query) {
    return new Promise((resolve) => rl.question(query, resolve));
}

// Fetch Trending Tokens
async function fetchTrendingTokens() {
    const trendingUrl = "https://pumpfun.com/api/trending-tokens"; // Replace with actual endpoint
    try {
        const response = await axios.get(trendingUrl);
        return response.data.tokens || []; // Replace with actual response field
    } catch (error) {
        console.error(chalk.redBright("Error fetching trending tokens:", error.message));
        return [];
    }
}

// Post Comment on a Thread
async function commentThread(threadId, token) {
    const commentsUrl = `https://pumpfun.com/thread/${threadId}/comments`;
    try {
        const response = await axios.get(commentsUrl, {
            headers: {
                "Content-Type": "application/json",
                Cookie: `token=${token}`,
            },
        });
        const comments = response.data.comments || [];
        if (comments.length === 0) {
            console.log(chalk.yellowBright("No comments found to reply to."));
            return;
        }

        const randomComment = "Amazing project!"; // Replace with dynamic logic if needed
        const postUrl = `https://pumpfun.com/thread/${threadId}/comment`;
        const postResponse = await axios.post(
            postUrl,
            { text: randomComment },
            {
                headers: {
                    "Content-Type": "application/json",
                    Cookie: `token=${token}`,
                },
            }
        );

        if (postResponse.status === 200) {
            console.log(chalk.greenBright(`Commented: ${randomComment}`));
        } else {
            console.error(chalk.redBright(`Failed to comment: ${postResponse.statusText}`));
        }
    } catch (error) {
        console.error(chalk.redBright("Error posting comment:", error.message));
    }
}

// Main Function
async function main() {
    console.log(chalk.blueBright("Fetching trending tokens..."));
    const trendingTokens = await fetchTrendingTokens();

    if (trendingTokens.length === 0) {
        console.log(chalk.yellowBright("No trending tokens found."));
        rl.close();
        process.exit(0);
    }

    console.log(chalk.greenBright("Trending Tokens:"));
    trendingTokens.forEach((token, index) => {
        console.log(`${index + 1}. ${token.name} (${token.symbol})`);
    });

    const choice = await promptUser(
        chalk.blueBright("Enter the number of the token you want to comment on (or type 'exit' to quit): ")
    );

    if (choice.toLowerCase() === "exit") {
        console.log(chalk.greenBright("Exiting..."));
        rl.close();
        process.exit(0);
    }

    const tokenIndex = parseInt(choice, 10) - 1;
    if (isNaN(tokenIndex) || tokenIndex < 0 || tokenIndex >= trendingTokens.length) {
        console.log(chalk.redBright("Invalid choice. Exiting..."));
        rl.close();
        process.exit(0);
    }

    const selectedToken = trendingTokens[tokenIndex];
    console.log(chalk.greenBright(`Selected Token: ${selectedToken.name} (${selectedToken.symbol})`));

    const token = "test_token"; // Simulated token
    await commentThread(selectedToken.threadId, token); // Replace with dynamic threadId logic
    rl.close();
}

main();
