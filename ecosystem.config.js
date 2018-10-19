module.exports = {
  apps : [{
    name: 'nextjsServer',
    script: 'server.js',
    cmd: '/',
    node_args: '--harmony',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
    error_file: './logs/error.log',
    out_file: './logs/out.log'
  }]
};
