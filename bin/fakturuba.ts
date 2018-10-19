#!/usr/bin/env node

import MainCommand from '../src/cli/command/MainCommand';
import Runner from '../src/cli/Runner';
import PdfGenerator from '../src/generator/PdfGenerator';
import FileInput from '../src/input/FileInput';
import PugProcessor from '../src/templating/PugProcessor';

import Fakturuba from './../src';

const generator = new PdfGenerator();

const command = new MainCommand();
const runner = new Runner(command);

const input = new FileInput();
const templatingProcessor = new PugProcessor();

Fakturuba(runner, input, templatingProcessor, generator);
