import {
  Avatar,
  AvatarImage,
  Heading,
  VStack,
  Text as GluestackText,
} from "@gluestack-ui/themed";

type HeaderProps = {
  children: React.ReactNode;
};

type ImageProps = {
  uri: string;
};

type TitleProps = {
  children: string;
};

function Image({ uri }: ImageProps) {
  return (
    <Avatar size="md">
      <AvatarImage
        source={{
          uri,
        }}
        borderWidth="$2"
        borderColor="$gray400"
        alt="Imagem do card"
      />
    </Avatar>
  );
}

function Header({ children }: HeaderProps) {
  return (
    <VStack borderBottomWidth="$1" paddingBottom="$2">
      {children}
    </VStack>
  );
}

function Body({ children }: HeaderProps) {
  return <VStack>{children}</VStack>;
}

function Title({ children }: TitleProps) {
  return <Heading>{children}</Heading>;
}

function Text({ children }: TitleProps) {
  return <GluestackText>{children}</GluestackText>;
}

export function Card({ children }: HeaderProps) {
  return (
    <VStack bg="$gray500" rounded="$lg">
      {children}
    </VStack>
  );
}

Card.Header = Header;
Card.Image = Image;
Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

// compound components pattern
