import React, { useEffect, useState } from 'react';
import { Box, Flex, Avatar, HStack, Link, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuDivider, useDisclosure, useColorModeValue, Image, useToast } from '@chakra-ui/react';
import { CloseButton, VStack, Icon, Drawer, DrawerContent, Text } from '@chakra-ui/react';
import { FiHome, FiCompass, FiMenu, FiBell, FiChevronDown, FiUsers, FiPlus, FiShoppingCart, FiActivity } from 'react-icons/fi';
import ManageAdmins from './ManageAdmins';
import ManageUsers from './ManageUsers';
import ManageOrders from './ManageOrders';
import ManageProducts from './ManageProducts';
import AddProducts from './AddProducts';
import AddAdmins from "./Addadmin"
 
import logo from "./logo/2mglogo.png"
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const LinkItems = [
    { name: 'Dashboard', compName: 'Dashboard', heading: 'Dashboard', icon: FiHome },
    { name: 'Add Products', compName: 'AddProducts', heading: 'Add Products', icon: FiPlus },
    { name: 'Manage Products', compName: 'ManageProducts', heading: 'Manage Products', icon: FiCompass },
    { name: 'Manage Orders', compName: 'ManageOrders', heading: 'Manage Products', icon: FiShoppingCart },
    { name: 'Add Admins', compName: 'AddAdmins', heading: 'Add Admins ', icon: FiPlus },
    { name: 'Manage Admins', compName: 'ManageAdmins', heading: 'Manage Admins', icon: FiUsers },
   
];

function SidebarWithHeader({ children }) {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [comp, setComp] = useState('Dashboard');
    const [admin, setadmin] = useState({});
    const adminId = localStorage.getItem('adminId')
    const navigate=useNavigate();
    const toast=useToast();
    const handleLogout = () => {
        navigate("/");
        toast({
            title: "Admin logged out successfully !!!",
            description: `Please visit us again !!! `,
            status: "error",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
      };

   
    const componentChange = (compName = comp) => {

        if (compName === 'Dashboard') return   <ManageAdmins />
 
        else if (compName === 'ManageAdmins') return <ManageAdmins />
        else if (compName === 'ManageOrders') return <ManageOrders />
        else if (compName === 'ManageProducts') return <ManageProducts />
        else if (compName === 'AddProducts') return <AddProducts />
        else if (compName === 'AddAdmins') return <AddAdmins />
        else if (compName === 'Home') return <Navbar />
    }
    
    useEffect(() => {
        componentChange(comp)
        axios.get(`https://universal-mall-api.onrender.com/admins/${adminId}`).then(res=>setadmin(res.data))
    }, [comp])
    console.log(admin)

    const SidebarContent = ({ onClose, ...rest }) => {
        return (


            <Box transition="3s ease" bg={useColorModeValue('blue.900', 'gray.900')} borderRight="1px"



                borderRightColor={useColorModeValue('gray.200', 'gray.700')} w={{ base: 'full', md: 60 }} pos="fixed" h="full" {...rest}>
                <Flex h="20" alignItems={"center"} justifyContent="center">
                    <Image  w={200} src={ "gukgth"} h={20}/>
                </Flex>
                {LinkItems.map((link) => (

                 
                    <NavItem onClick={() => setComp(link.compName)} key={link.name} icon={link.icon} color={"white"}>{link.name}</NavItem>

               ))}

         
            </Box>
        );
    };

    return (
        <Box>
            <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
                <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
                <Drawer autoFocus={false} isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
                    <DrawerContent><SidebarContent onClose={onClose} /></DrawerContent>
                </Drawer>
                {/* mobilenav */}
                <MobileNav admin={admin} handleLogout={handleLogout} onOpen={onOpen} />
                <Flex className='main-content' justifyContent={'center'} ml='100'>
                    {componentChange()}
                </Flex>
                <Box ml={{ base: 0, md: 60 }} p="4">{children}</Box>
            </Box>
        </Box>
    );
}

const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (<Icon mr="4" fontSize="16" _groupHover={{ color: 'white', }} as={icon} />)}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({admin, handleLogout,onOpen, ...rest }) => {
    const navigate=useNavigate()
    const toast=useToast();
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"


            // bg={useColorModeValue('white', 'gray.900')}

            bg={useColorModeValue('blue.900', 'gray.900')}


            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <HStack spacing={{ base: '0', md: '6' }}>
                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                    color={"white"}
       
                    _hover={{
                        bg: 'white',
                        color: 'black',
                    }}
                />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar size={'sm'} src="https://avatars.githubusercontent.com/u/112754760?v=4"/>
                                <VStack display={{ base: 'none', md: 'flex' }} alignItems="flex-start" spacing="1px" ml="2">
                                    <Text fontSize="sm">{admin.name}</Text>
                                    <Text fontSize="xs"  color={"white"}>Admin</Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem>Profile</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={handleLogout}>Sign out</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={()=>{
                               navigate("/")
                               toast({
                                title: "Moved to Home Page ...",
                                description: `Welcome to home page !!!`,
                                status: "success",
                                duration: 3000,
                                position: "top",
                                isClosable: true,
                              });
                            }}>Home</MenuItem>
                            <MenuDivider />
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export default SidebarWithHeader;