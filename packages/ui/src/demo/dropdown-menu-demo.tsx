import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
} from "lucide-react";

import {Button, DropdownMenu,} from "../";

export function DropdownMenuDemo() {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button variant="secondary">Clique aqui</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
                <DropdownMenu.Label>Minha conta</DropdownMenu.Label>
                <DropdownMenu.Separator/>
                <DropdownMenu.Group>
                    <DropdownMenu.Item>
                        <User className="mr-2 h-4 w-4"/>
                        <span>Perfil</span>
                        <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <CreditCard className="mr-2 h-4 w-4"/>
                        <span>Contas</span>
                        <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <Settings className="mr-2 h-4 w-4"/>
                        <span>Configurações</span>
                        <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>
                        <Keyboard className="mr-2 h-4 w-4"/>
                        <span>Atalhos de teclado</span>
                        <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator/>
                <DropdownMenu.Group>
                    <DropdownMenu.Item>
                        <Users className="mr-2 h-4 w-4"/>
                        <span>Time</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>
                            <UserPlus className="mr-2 h-4 w-4"/>
                            <span>Convidar amigos</span>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent>
                                <DropdownMenu.Item>
                                    <Mail className="mr-2 h-4 w-4"/>
                                    <span>Email</span>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item>
                                    <MessageSquare className="mr-2 h-4 w-4"/>
                                    <span>Messagem</span>
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator/>
                                <DropdownMenu.Item>
                                    <PlusCircle className="mr-2 h-4 w-4"/>
                                    <span>Expandir...</span>
                                </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                    <DropdownMenu.Item>
                        <Plus className="mr-2 h-4 w-4"/>
                        <span>Novo time</span>
                        <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
                    </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator/>
                <DropdownMenu.Item>
                    <Github className="mr-2 h-4 w-4"/>
                    <span>GitHub</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                    <LifeBuoy className="mr-2 h-4 w-4"/>
                    <span>Suporte</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item disabled>
                    <Cloud className="mr-2 h-4 w-4"/>
                    <span>API</span>
                </DropdownMenu.Item>
                <DropdownMenu.Separator/>
                <DropdownMenu.Item>
                    <LogOut className="mr-2 h-4 w-4"/>
                    <span>Log out</span>
                    <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}
