# QA

1. xcodebuild
Q: 
	xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
A: 
  `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`
