import multiprocessing
#
# Gunicorn config file
#
wsgi_app = 'simple_board.wsgi:application'

# Server Mechanics
#========================================
# current directory
chdir = '/api/simple_board'

# daemon mode
daemon = False

# enviroment variables
# raw_env = []

# Server Socket
#========================================
bind = '0.0.0.0:8080'

# Worker Processes
#========================================
workers = (multiprocessing.cpu_count()*2) + 1

#  Logging
#========================================
# accesslog
accesslog = '/api/logs/access.log'
# errorlog
errorlog = '/api/logs/error.log'
