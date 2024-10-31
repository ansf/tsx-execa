import { execa } from 'execa'

execa("echo", ["hello world"], { stdio: "inherit" })

