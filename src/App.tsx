import { Field } from "./components/ui/field"
import { Radio, RadioGroup } from "./components/ui/radio"
import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { FaEnvelope, FaMobileAlt, FaSlack, FaUpload } from "react-icons/fa"

function App() {
  const [theme, setTheme] = useState("system")
  const [notification, setNotification] = useState({
    email: true,
    slack: false,
    mobile: false,
  })

  return (
    <Box bg="gray.900" minH="100vh" color="white">
      <Box maxW="4xl" mx="auto" p={8}>
        {/* Profile Information */}
        <Box mb={12}>
          <Heading size="lg" mb={2} color="white">
            Profile Information
          </Heading>
          <Text color="gray.400" mb={8}>
            Update your profile information
          </Text>
          
          <HStack mb={8} align="start">
            <Box position="relative">
              <Avatar 
                size="2xl" 
                bg="teal.500"
                icon={<Icon as={FaUpload} boxSize={8} />}
              />
            </Box>
            <VStack align="start" spacing={2}>
              <Button 
                colorScheme="teal" 
                size="sm"
                leftIcon={<Icon as={FaUpload} />}
              >
                Upload photo
              </Button>
              <Text fontSize="sm" color="gray.400">
                Pick a photo up to 3 MB
              </Text>
            </VStack>
          </HStack>

          <VStack spacing={6} align="stretch">
            <Field label="Name">
              <Input 
                placeholder="Enter your name"
                bg="gray.800"
                border="1px solid"
                borderColor="gray.700"
                _hover={{ borderColor: "gray.600" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)" }}
              />
            </Field>
            <Field label="Email address">
              <Input 
                placeholder="Enter your email"
                bg="gray.800"
                border="1px solid"
                borderColor="gray.700"
                _hover={{ borderColor: "gray.600" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)" }}
              />
            </Field>
            <Box>
              <Button colorScheme="teal" size="sm">
                Save
              </Button>
            </Box>
          </VStack>
        </Box>

        {/* Password */}
        <Box mb={12}>
          <Heading size="lg" mb={2} color="white">
            Password
          </Heading>
          <Text color="gray.400" mb={8}>
            Update your password
          </Text>

          <VStack spacing={6} align="stretch">
            <Field label="Current password">
              <Input 
                type="password"
                bg="gray.800"
                border="1px solid"
                borderColor="gray.700"
                _hover={{ borderColor: "gray.600" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)" }}
              />
            </Field>
            <Field label="New password">
              <Input 
                type="password"
                bg="gray.800"
                border="1px solid"
                borderColor="gray.700"
                _hover={{ borderColor: "gray.600" }}
                _focus={{ borderColor: "teal.500", boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)" }}
              />
            </Field>
            <Box>
              <Button colorScheme="teal" size="sm">
                Save
              </Button>
            </Box>
          </VStack>
        </Box>

        {/* Two-Factor Authentication */}
        <Box mb={12}>
          <Heading size="lg" mb={2} color="white">
            Two-factor authentication
          </Heading>
          <Text color="gray.400" mb={8}>
            Add an extra layer of security
          </Text>
          
          <Text color="gray.300" mb={6} lineHeight="1.6">
            Two-factor authentication is a security system that requires more than one form of authentication from independent categories of credentials.
          </Text>
          
          <Button colorScheme="teal" size="sm">
            Enable
          </Button>
        </Box>

        {/* Theme */}
        <Box mb={12}>
          <Heading size="lg" mb={8} color="white">
            Theme
          </Heading>
          
          <RadioGroup value={theme} onChange={setTheme}>
            <HStack spacing={6}>
              <Box 
                p={4} 
                border="2px solid" 
                borderColor={theme === "system" ? "teal.500" : "gray.700"}
                borderRadius="lg"
                cursor="pointer"
                bg="gray.800"
                minW="120px"
              >
                <Radio value="system">
                  <VStack spacing={2} align="start">
                    <Text fontWeight="medium">System</Text>
                  </VStack>
                </Radio>
              </Box>
              
              <Box 
                p={4} 
                border="2px solid" 
                borderColor={theme === "light" ? "teal.500" : "gray.700"}
                borderRadius="lg"
                cursor="pointer"
                bg="gray.800"
                minW="120px"
              >
                <Radio value="light">
                  <VStack spacing={2} align="start">
                    <Text fontWeight="medium">Light</Text>
                  </VStack>
                </Radio>
              </Box>
              
              <Box 
                p={4} 
                border="2px solid" 
                borderColor={theme === "dark" ? "teal.500" : "gray.700"}
                borderRadius="lg"
                cursor="pointer"
                bg="gray.800"
                minW="120px"
              >
                <Radio value="dark">
                  <VStack spacing={2} align="start">
                    <Text fontWeight="medium">Dark</Text>
                  </VStack>
                </Radio>
              </Box>
            </HStack>
          </RadioGroup>
          
          <Button mt={6} colorScheme="teal" size="sm">
            Save
          </Button>
        </Box>

        {/* Notification Methods */}
        <Box mb={12}>
          <Heading size="lg" mb={2} color="white">
            Notification Methods
          </Heading>
          <Text color="gray.400" mb={8}>
            Where would you like to receive notifications?
          </Text>

          <VStack spacing={6} align="stretch">
            <HStack justify="space-between" py={4}>
              <HStack spacing={4}>
                <Icon as={FaEnvelope} boxSize={5} color="gray.400" />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="medium">Email</Text>
                  <Text fontSize="sm" color="gray.400">
                    Receive notifications via email
                  </Text>
                </VStack>
              </HStack>
              <Switch
                colorScheme="teal"
                isChecked={notification.email}
                onChange={(e) =>
                  setNotification({ ...notification, email: e.target.checked })
                }
              />
            </HStack>

            <HStack justify="space-between" py={4}>
              <HStack spacing={4}>
                <Icon as={FaSlack} boxSize={5} color="gray.400" />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="medium">Slack</Text>
                  <Text fontSize="sm" color="gray.400">
                    Receive notifications via Slack
                  </Text>
                </VStack>
              </HStack>
              <Switch
                colorScheme="teal"
                isChecked={notification.slack}
                onChange={(e) =>
                  setNotification({ ...notification, slack: e.target.checked })
                }
              />
            </HStack>

            <HStack justify="space-between" py={4}>
              <HStack spacing={4}>
                <Icon as={FaMobileAlt} boxSize={5} color="gray.400" />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="medium">Mobile</Text>
                  <Text fontSize="sm" color="gray.400">
                    Receive mobile notifications
                  </Text>
                </VStack>
              </HStack>
              <Switch
                colorScheme="teal"
                isChecked={notification.mobile}
                onChange={(e) =>
                  setNotification({ ...notification, mobile: e.target.checked })
                }
              />
            </HStack>
          </VStack>
        </Box>

        {/* Danger Zone */}
        <Box>
          <Heading size="lg" mb={2} color="white">
            Danger Zone
          </Heading>
          <Text color="gray.400" mb={8}>
            Delete your account
          </Text>
          
          <Text color="gray.300" mb={6} lineHeight="1.6">
            Once you delete your account, there is no going back. All of your information will be lost. Before you go, please download your information.
          </Text>
          
          <Button colorScheme="red" size="sm">
            Delete account
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default App