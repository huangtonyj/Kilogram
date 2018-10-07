# Database Schema

## `users`
column name | data type | null? | indexed? | unique? | key?
------------|-----------|-------|----------|---------|------
`id`|integer|no|||primary
`username/email`|string|no|yes|yes|
`email`|string|no|yes|yes|
`pasword_digest`|string|no|||
`session_token`|string|no|yes|yes|
`description`|text|no|||
`created_at`|datetime|no|||
`updated_at`|datetime|no|||

## `posts`
column name | data type | null? | indexed? | unique? | key?
------------|-----------|-------|----------|---------|------
`id`|integer|no|||primary
`author_id (user_id)`|integer|no|yes||foreign
`img_url`|string|no|||
`location_id`|integer||yes||foreign
`created_at`|datetime|no|||
`updated_at`|datetime|no|||
*note: do not store img_url with ActiveStorage, AWS takes care of it.

## `comments`
column name | data type | null? | indexed? | unique? | key?
------------|-----------|-------|----------|---------|------
`id`|integer|no|||primary
`post_id`|integer|no|yes||foreign
`parent_comment_id`|integer||yes||foreign
`author_id (user_id)`|integer|no|yes||foreign
`comment`|text|no|||
`created_at`|datetime|no|||
`updated_at`|datetime|no|||

## `likes`
column name | data type | null? | indexed? | unique? | key?
------------|-----------|-------|----------|---------|------
`id`|integer|no|||primary
`post_id`|integer|no|user_id|user_id|foreign
`user_id`|integer|no|post_id|post_id|foreign
`created_at`|datetime|no|||
`updated_at`|datetime|no|||

## `follows`
column name | data type | null? | indexed? | unique? | key?
------------|-----------|-------|----------|---------|------
`id`|integer|no|||primary
`follower_id (user_id)`|integer|no|followee_id|followee_id|foreign
`followee_id (user_id)`|integer|no|follower_id|follower_id|foreign
`created_at`|datetime|no|||
`updated_at`|datetime|no|||

## `tags`
column name | data type | null? | indexed? | unique? | key?
------------|-----------|-------|----------|---------|------
`id`|integer|no|||primary
`tag`|string|no||yes|
`created_at`|datetime|no|||
`updated_at`|datetime|no|||

## `locations`
column name | data type | null? | indexed? | unique? | key?
------------|-----------|-------|----------|---------|------
`id`|integer|no|||primary
`location`|string|no||yes|
`created_at`|datetime|no|||
`updated_at`|datetime|no|||