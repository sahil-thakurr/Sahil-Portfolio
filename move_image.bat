@echo off
if not exist src\assets mkdir src\assets
move /Y assests\profile.jpeg src\assets\profile.jpeg
rmdir assests
del src\assets\placeholder.txt
echo Done
