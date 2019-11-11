assetsDir="assets/"
workshopsDir="../../docs/workshop/site/workshop/codelabs"

practice=(
  "Hello World,hello-world-cli-in-node.md"
  "Parse arguments,hello-world-cli-in-node.md"
  "Hello World with TypeScript,hello-world-cli-in-node.md"
  "Configure oclif project,make-it-work-with-oclif.md"
  "Make it Work,make-it-work-with-oclif.md"
  "List Github Issues,make-it-shine.md"
  "Assign an Issue,make-it-shine.md"
  "Notify Slack on Issues Update,oclif-in-depth.md"
  "Add Tests,extra.md"
  "Commands VS Plugins,extra.md"
)

for item in "${practice[@]}"
  do
    exercise=$(echo "$item" | cut -d ',' -f 1)
    file=$(echo "$item" | cut -d ',' -f 2)
    output="${assetsDir}/${exercise}".md
    cat "$workshopsDir/$file" | grep -A1000 "Practice - $exercise" | grep -B1000 -m 1 "^\-\-\-" > $output

    if [[ ! -s $output ]]
    then
        grep -A1000 "Practice - $exercise" "$workshopsDir/$file" > $output
    fi
  done