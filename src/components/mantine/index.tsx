"use client"
import theme from "@/core/mantine/theme";
import { Container, Title, Flex, MantineProvider, Button, Center, Grid, Space } from "@mantine/core";

const Mantine = () => {
  return (
    <MantineProvider theme={theme}>
      <Container sx={{
        height: '100vh',

      }}>
        <Title order={1} color='blue.6'>
          Mantine
        </Title>
        <Flex direction={'column'} align={'center'} maw={400} h={100} mx="auto">
          <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="wrap"
          >
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
          </Flex>
          <Space h="md" />
          <Grid>
            <Grid.Col span={4}>1</Grid.Col>
            <Grid.Col span={4}>2</Grid.Col>
            <Grid.Col span={4}>3</Grid.Col>
          </Grid>
        </Flex>
      </Container>
    </MantineProvider>
  )
}

export default Mantine;