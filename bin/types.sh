/bin/rm -rf ./module/combined/ ; cp -r ./combined ./module/combined
/bin/rm -rf ./module/types &>/dev/null ; mkdir ./module/types &>/dev/null

./node_modules/quicktype/dist/cli/index.js ./combined/Achievements.json --just-types -t Achievement  -o ./module/types/Achievement.ts
./node_modules/quicktype/dist/cli/index.js ./combined/Construction.json --just-types -t Construction -o ./module/types/Construction.ts
./node_modules/quicktype/dist/cli/index.js ./combined/Creatures.json    --just-types -t Creature     -o ./module/types/Creature.ts
./node_modules/quicktype/dist/cli/index.js ./combined/Events.json       --just-types -t Event        -o ./module/types/Event.ts
./node_modules/quicktype/dist/cli/index.js ./combined/IDs.json          --just-types -t ID           -o ./module/types/ID.ts
./node_modules/quicktype/dist/cli/index.js ./combined/Items.json        --just-types -t Item         -o ./module/types/Item.ts
./node_modules/quicktype/dist/cli/index.js ./combined/Reactions.json    --just-types -t Reaction     -o ./module/types/Reaction.ts
./node_modules/quicktype/dist/cli/index.js ./combined/Recipes.json      --just-types -t Recipe       -o ./module/types/Recipe.ts
./node_modules/quicktype/dist/cli/index.js ./combined/Translations.json --just-types -t Translation  -o ./module/types/Translation.ts
./node_modules/quicktype/dist/cli/index.js ./combined/Villagers.json    --just-types -t Villager     -o ./module/types/Villager.ts
./node_modules/quicktype/dist/cli/index.js ./combined/*Hemisphere.json  --just-types -t Hemisphere   -o ./module/types/Hemisphere.ts
