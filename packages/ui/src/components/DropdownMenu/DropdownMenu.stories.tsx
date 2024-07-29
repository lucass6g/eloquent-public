import { Fragment, ReactNode } from "react";
import { LayoutGrid } from "lucide-react";
import { DropdownMenu } from "./";

export default {
  title: "Dropdown Menu",
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component:
          "Exibe um menu ao usuário, como um conjunto de ações ou funções.",
      },
    },
  },
  args: {
    disabled: false,
    side: "bottom",
    sideOffset: 0,
    align: "start",
    alignOffset: 0,
    avoidCollisions: true,
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
      description: "Habilita ou desabilita o menu.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Posiciona o menu em relação ao trigger.",
      table: {
        defaultValue: { summary: "bottom" },
      },
    },
    sideOffset: {
      control: "number",
      description: "Desloca o menu em relação ao trigger.",
      table: {
        defaultValue: { summary: "0" },
      },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alinha o menu em relação ao trigger.",
      table: {
        defaultValue: { summary: "start" },
      },
    },
    alignOffset: {
      control: "number",
      description: "Desloca o menu em relação ao trigger.",
      table: {
        defaultValue: { summary: "0" },
      },
    },
    avoidCollisions: {
      options: [true, false],
      control: { type: "boolean" },
      description: "Evita que o menu colida com a borda da tela.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
};

const BaseItems = (disabled: boolean, leftIcon: boolean, rightIcon: boolean) =>
  [...Array(10).keys()].map((item) => (
    <Fragment key={item}>
      <DropdownMenu.Item disabled={item === 0 ? disabled : false}>
        {leftIcon && (
          <DropdownMenu.Icon position="left">
            <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
          </DropdownMenu.Icon>
        )}
        Item {item + 1}
        {rightIcon && (
          <DropdownMenu.Icon position="right">
            <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
          </DropdownMenu.Icon>
        )}
      </DropdownMenu.Item>
    </Fragment>
  ));

type BaseMenuProps = {
  disabled: boolean;
  side: "left" | "right" | "bottom" | "top" | undefined;
  sideOffset: number;
  align: "center" | "end" | "start" | undefined;
  alignOffset: number;
  avoidCollisions: boolean;
};

const BaseMenu = (
  {
    disabled,
    side,
    sideOffset,
    align,
    alignOffset,
    avoidCollisions,
  }: BaseMenuProps,
  items: () => ReactNode
) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger disabled={disabled} asChild>
      Items
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      avoidCollisions={avoidCollisions}
      className="w-56"
    >
      <DropdownMenu.Label>Título</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Group>{items()}</DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

interface TemplateProps {
  (args: BaseMenuProps): JSX.Element;
  storyName?: string;
}

const IconsLeftTemplate = ({
  disabled,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
}: BaseMenuProps) =>
  BaseMenu(
    { disabled, side, sideOffset, align, alignOffset, avoidCollisions },
    () => BaseItems(false, true, false)
  );

export const IconsLeft: TemplateProps = IconsLeftTemplate;
IconsLeft.storyName = "Ícones à esquerda";

const IconsRightTemplate = ({
  disabled,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
}: BaseMenuProps) =>
  BaseMenu(
    { disabled, side, sideOffset, align, alignOffset, avoidCollisions },
    () => BaseItems(false, false, true)
  );
export const IconsRight: TemplateProps = IconsRightTemplate;
IconsRight.storyName = "Ícones à direita";

const WithoutIconsTemplate = ({
  disabled,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
}: BaseMenuProps) =>
  BaseMenu(
    { disabled, side, sideOffset, align, alignOffset, avoidCollisions },
    () => BaseItems(false, false, false)
  );
export const WithoutIcon: TemplateProps = WithoutIconsTemplate;
WithoutIcon.storyName = "Sem ícones";

const IconsLeftOneDisabledTemplate = ({
  disabled,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
}: BaseMenuProps) =>
  BaseMenu(
    { disabled, side, sideOffset, align, alignOffset, avoidCollisions },
    () => BaseItems(true, true, false)
  );

export const IconsLeftOneDisabled: TemplateProps = IconsLeftOneDisabledTemplate;
IconsLeftOneDisabled.storyName = "Ícones à esquerda com item desabilitado";

const IconsRightOneDisabledTemplate = ({
  disabled,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
}: BaseMenuProps) =>
  BaseMenu(
    { disabled, side, sideOffset, align, alignOffset, avoidCollisions },
    () => BaseItems(true, false, true)
  );
export const IconsRightOneDisabled: TemplateProps =
  IconsRightOneDisabledTemplate;
IconsRightOneDisabled.storyName = "Ícones à direita com item desabilitado";

const WithoutIconsOneDisabledTemplate = ({
  disabled,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
}: BaseMenuProps) =>
  BaseMenu(
    { disabled, side, sideOffset, align, alignOffset, avoidCollisions },
    () => BaseItems(true, false, false)
  );
export const WithoutIconOneDisabled: TemplateProps =
  WithoutIconsOneDisabledTemplate;
WithoutIconOneDisabled.storyName = "Sem ícones com item desabilitado";
