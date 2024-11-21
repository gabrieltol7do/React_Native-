import { Image, ScrollView, Text, TextInput, View } from "react-native";
import boleto from "../../assets/boleto.png";
import dinheiro from "../../assets/dinheiro.png";
import Logo from "../../assets/logo.png";
import Mastercard from "../../assets/mastercard.png";
import pix from "../../assets/pix.png";
import Setting from "../../assets/setting.png";
import { styles } from "./style"; // Importação dos estilos

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={Logo} />
          <Image source={Setting} />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View />
            <Image source={Mastercard} />
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.cardFooterText}>Gabriel Toledo</Text>
            <View />
          </View>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
            <TextInput 
              style={styles.input}
              placeholder="Digite um valor"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.cardDetailsTextValue}>R$999992,77</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Do que precisa?</Text>
        <ScrollView
          style={styles.footerScrollCardContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <View style={styles.footerCard}>
            <Image source={pix} />
            <Text style={styles.footerCardText}>Fazer um Pix</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={boleto} />
            <Text style={styles.footerCardText}>Pagar um boleto</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={dinheiro} />
            <Text style={styles.footerCardText}>Fazer um depósito</Text>
          </View>
          <View style={styles.footerCard}></View>
        </ScrollView>
      </View>
    </View>
  );
}
