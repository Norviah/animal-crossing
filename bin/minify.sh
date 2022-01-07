# After running the project, src/combined will consist of the generated JSON
# files containing information from the spreadsheet. However, these JSON files
# aren't minified, which waste unneeded space for the npm package.

# The goal of this script is to generate a minified version for each JSON file
# for the npm package.

data="./json/combined"
location="./module/data"

mkdir "$location" -p

for file in $(ls $data); do
  # Represents the basename of the file, without the file's extension.
  name="${file%.json}"

  # For each json file we'll generate a minified version, saving the generated
  # minified version as '[name].min.json' in the same directory.
  jq -c . < "$data/$name.json" > "$data/$name.min.json"

  # After the minified version has been generated, we'll instead opt to use
  # them for the package, which should save a good amount of unneeded space.
  cp "$data/$name.min.json" "$location/$name.json"
done
