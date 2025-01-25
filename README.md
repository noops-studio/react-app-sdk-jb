# API SDK Documentation

A TypeScript SDK for interacting with the API, providing easy access to authentication, posts, comments, follows, and feed functionality.

## Installation

```bash
npm install @noops-studio/react-app-sdk-jb
```

## Quick Start

```typescript
import { ApiSDK } from '@noops-studio/react-app-sdk-jb';

// Initialize the SDK
const sdk = new ApiSDK('https://api.example.com');

// Login
await sdk.auth.login('username', 'password');

// Create a post
await sdk.posts.create('My First Post', 'Hello World!');
```

## Features

The SDK provides access to the following API endpoints:

- Authentication (login, signup)
- Posts (create, read, update, delete)
- Comments (create, read, update, delete)
- Follows (follow/unfollow users)
- Feed (user feed)

## API Reference

### Authentication

```typescript
// Login
await sdk.auth.login(username: string, password: string, variant?: 'standard' | 'delayed' | 'allowDelayed');

// Sign up
await sdk.auth.signup(username: string, password: string, name: string, variant?: 'standard' | 'delayed' | 'allowDelayed');
```

### Posts

```typescript
// Fetch all posts
await sdk.posts.fetchAll(variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Fetch single post
await sdk.posts.fetchById(id: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Create post
await sdk.posts.create(title: string, body: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Update post
await sdk.posts.update(id: string, title: string, body: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Delete post
await sdk.posts.delete(id: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');
```

### Comments

```typescript
// Fetch all comments
await sdk.comments.fetchAll(variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Fetch comments for a post
await sdk.comments.fetchByPostId(postId: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Create comment
await sdk.comments.create(postId: string, body: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Update comment
await sdk.comments.update(id: string, body: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Delete comment
await sdk.comments.delete(id: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');
```

### Follows

```typescript
// Get followers
await sdk.follows.getFollowers(variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Get following
await sdk.follows.getFollowing(variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Follow user
await sdk.follows.follow(userId: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');

// Unfollow user
await sdk.follows.unfollow(userId: string, variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');
```

### Feed

```typescript
// Get user feed
await sdk.feed.fetchUserFeed(variant?: 'standard' | 'delayed' | 'allow' | 'allowDelayed');
```

## Request Variants

All API methods support different variants that modify the behavior of the request:

- `standard`: Default behavior
- `delayed`: Adds artificial delay to the response
- `allow`: Modified permission checking
- `allowDelayed`: Combines delayed response with modified permissions

## Error Handling

The SDK uses axios for HTTP requests and automatically handles error responses. All errors are transformed into Error objects with meaningful messages.

```typescript
try {
  await sdk.posts.create('My Post', 'Content');
} catch (error) {
  console.error(error.message); // Will contain the error message from the API
}
```

## Custom Headers

You can initialize the SDK with custom headers:

```typescript
const sdk = new ApiSDK('https://api.example.com', {
  'Custom-Header': 'value'
});
```

## Authentication Token

The SDK automatically manages the authentication token after login. The token is included in all subsequent requests.