/* eslint-disable import/no-anonymous-default-export */

// short way

export default (req, res) => {
  res.status(200).json({
    test: 'test json response'
  })
} 

// long way

// export default (req, res) => {
//   res.setHeader('Content-Type', 'application/json')
//   res.statusCode = 200
//   res.end(JSON.stringify({
//     test: 'hello level up'
//   }))
// }