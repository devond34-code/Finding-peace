module.exports = {
  apps: [
    {
      name: 'finding-peace',
      script: 'npx',
      args: 'wrangler pages dev dist --kv FP_KV --local --ip 0.0.0.0 --port 3000',
      cwd: '/home/user/webapp',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
