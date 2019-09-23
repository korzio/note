import {Hook} from '@oclif/config'
import * as nodegit from 'nodegit'
import * as path from 'path'

const hook: Hook<'commit'> = async function ({id, file: fileName}) {
  const directoryName = process.cwd()

  const repo = await nodegit.Repository.open(path.resolve(directoryName, '.git'))
  const index = await repo.refreshIndex()
  await index.addByPath(fileName)
  await index.write()
  const oid = await index.writeTree()
  const head = await nodegit.Reference.nameToId(repo, "HEAD")
  const parent = await repo.getCommit(head)

  const author = nodegit.Signature.now("Scott Chacon", "schacon@gmail.com")
  const committer = nodegit.Signature.now("Scott A Chacon", "scott@github.com")

  const commitId = await repo.createCommit("HEAD", author, committer, `${id} note ${fileName}`, oid, [parent])

  console.log("New Commit: ", commitId)
}

export default hook
