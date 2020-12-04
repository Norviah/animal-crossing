data="./json/combined"
location="./module/types"

/bin/rm -rf "$location" &>/dev/null ; mkdir "$location"

./node_modules/quicktype/dist/cli/index.js "$data/Achievements.json"              --just-types -t Achievement      -o "$location/Achievement.ts"
./node_modules/quicktype/dist/cli/index.js "$data/Construction.json"              --just-types -t Construction     -o "$location/Construction.ts"
./node_modules/quicktype/dist/cli/index.js "$data/Creatures.json"                 --just-types -t Creature         -o "$location/Creature.ts"
./node_modules/quicktype/dist/cli/index.js "$data/Items.json"                     --just-types -t Item             -o "$location/Item.ts"
./node_modules/quicktype/dist/cli/index.js "$data/Reactions.json"                 --just-types -t Reaction         -o "$location/Reaction.ts"
./node_modules/quicktype/dist/cli/index.js "$data/Recipes.json"                   --just-types -t Recipe           -o "$location/Recipe.ts"
./node_modules/quicktype/dist/cli/index.js "$data/Translations.json"              --just-types -t Translation      -o "$location/Translation.ts"
./node_modules/quicktype/dist/cli/index.js "$data/Villagers.json"                 --just-types -t Villager         -o "$location/Villager.ts"
./node_modules/quicktype/dist/cli/index.js "$data/NPCs.json"                      --just-types -t NPC              -o "$location/NPC.ts"
./node_modules/quicktype/dist/cli/index.js "$data/SeasonsAndEvents.json"          --just-types -t SeasonsAndEvents -o "$location/SeasonsAndEvents.ts" --no-date-times
