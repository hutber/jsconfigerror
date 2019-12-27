import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '../components/shared/Link'
import { useQuery} from 'lib/apollo'

export default function Index() {
  return (
    <Link href="/about" color="secondary">
      Go to the about page
    </Link>
  )
}
