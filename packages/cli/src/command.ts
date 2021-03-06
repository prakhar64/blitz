import {Command as OclifCommand} from '@oclif/command'
import Enquirer = require('enquirer')

abstract class Command extends OclifCommand {
  protected enquirer = new Enquirer()
}

export default Command
