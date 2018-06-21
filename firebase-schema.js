/** 
 * no perfect
 *  -tradeoff
 * keep shallow
 * repeat data is ok
*/

/**
 * Home
 *  all ducks
 */

/**
 * Profile
 *   user info
 *   user ducks
 */

/**
 * Replies
 *  specific duck
 *  duck replies
 */

/users
  uid
    name
    uid
    avatar

/ducks
  duckId
    avatar
    duckId
    name
    text
    timestamp
    uid(of duck author)

/likeCount
  duckId
    0

/usersDucks
  uid
    duckId
      avatar
      duckId
      name
      text
      timestamp
      uid(of duck author)

/replies
  duckId
    replyId
      name
      comment
      uid
      timestamp
      avatar

/usersLikes
  uid
    duckId: true