<template>

  <KModal
    size="large"
    :title="coreString('usageAndPrivacyLabel')"
    @cancel="$emit('cancel')"
  >
    <section v-if="!hideUsersSection">
      <h2>{{ coreString('usersLabel') }}</h2>
      <p>{{ $tr('kolibriUsersP1') }}</p>
      <p>{{ $tr('kolibriUsersP2') }}</p>
      <p>{{ $tr('kolibriUsersP3') }}</p>
      <p>{{ $tr('kolibriUsersP4') }}</p>
      <ul>
        <li>{{ $tr('kolibriUsersL1') }}</li>
        <li>{{ $tr('kolibriUsersL2') }}</li>
        <li>{{ $tr('kolibriUsersL3') }}</li>
        <li>{{ $tr('kolibriUsersL4') }}</li>
      </ul>
      <p>{{ $tr('kolibriUsersP5') }}</p>
      <p>{{ $tr('kolibriUsersP6') }}</p>
      <template v-if="oidcProviderEnabled">
        <h3>{{ $tr('openIdH1') }}</h3>
        <p>{{ $tr('openIdP1') }}</p>
      </template>
    </section>
    <section v-if="!hideOwnersSection">
      <h2>{{ $tr('kolibriOwnersTitle') }}</h2>
      <p>{{ $tr('kolibriOwnersP1') }}</p>
      <p>{{ $tr('kolibriOwnersP2') }}</p>
      <p>{{ $tr('kolibriOwnersP3') }}</p>
      <p>{{ $tr('kolibriOwnersP4') }}</p>
    </section>

    <template v-slot:actions>
      <!--
        Need to inject a button without type="submit" attribute
        so it doesn't force a submit event in the SetupWizard SuperuserCredentialsForm
      -->
      <KButton
        :text="coreString('closeAction')"
        primary
        @click="$emit('submit')"
      />
    </template>
  </KModal>

</template>


<script>

  import commonCoreStrings from 'kolibri.coreVue.mixins.commonCoreStrings';
  import plugin_data from 'plugin_data';

  export default {
    name: 'PrivacyInfoModal',
    mixins: [commonCoreStrings],
    props: {
      hideUsersSection: {
        type: Boolean,
        default: false,
      },
      hideOwnersSection: {
        type: Boolean,
        default: false,
      },
      hideAboutSection: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      oidcProviderEnabled() {
        return plugin_data.oidcProviderEnabled;
      },
    },
    $trs: {
      kolibriUsersP1:
        'You should use Camara Learning Studio in compliance with all applicable laws. This may mean obtaining permission from your parent, guardian, or teacher.',
      kolibriUsersP2:
        'Be aware that your personal information may be visible to others, depending on how the software has been configured and how you access the software.',
      kolibriUsersP3:
        'Please contact your local Camara Learning Studio administrator to understand what personal information of yours might be stored, who it’s visible to, how to update or delete it, or if you believe your account has been compromised.',
      kolibriUsersP4: 'You should not:',
      kolibriUsersL1:
        'Share your password, let anyone access your account, or do anything that might put your account at risk',
      kolibriUsersL2: "Attempt to access any other user's account",
      kolibriUsersL3:
        'Remove, circumvent, disable, damage or otherwise interfere with security-related features of Camara Learning Studio',
      kolibriUsersL4: {
        message:
          'Intentionally interfere with or damage the operation of Camara Learning Studio or any user’s enjoyment of it, by any means',
        context: 'Part of the "Usage and privacy" recommendations.',
      },
      kolibriUsersP5:
        'When you use Camara Learning Studio as a logged-in user, information such as your name, username, age, birth year, identification number, the resources that you view, and your performance on assessments may be made available to administrators and educators in your facility. Your information may also be used by the developers of Camara Learning Studio and shared with content creators to help improve the software and resources for different learner types and needs.',
      kolibriUsersP6:
        'When you use Camara Learning Studio as a guest, aggregate information about the resources you and other guest users view may be available to administrators and certain educators.',
      kolibriOwnersTitle: 'Administrators',
      kolibriOwnersP1:
        'You should run Camara Learning Studio as a service in compliance with all applicable laws. If you are the owner of the device that Camara Learning Studio is installed on, please be aware that you are ultimately responsible for the safety and protection of the user data that gets stored in Camara Learning Studio.',
      kolibriOwnersP2:
        'You should also follow best information security practices for protecting your users’ data. This includes keeping the device physically secure, encrypting the hard drive, using strong and unique passwords, keeping the operating system up-to-date, and having a properly-configured firewall.',
      kolibriOwnersP3:
        'If you choose to sync your institution data to the Camara Learning Studio Data Portal, you would be granting Camara Learning Studio Data Portal organization administrators access to your data. You would also be granting access to Learning Equality, who operates the servers.',
      kolibriOwnersP4:
        'Please ensure that your users have way of getting in touch with you if they have concerns about their accounts.',
      openIdH1: 'Signing in to third-party applications using Kolibri',
      openIdP1:
        'It is possible to use Kolibri to register or sign in to third-party applications. If you do this, the other application will have access to your Kolibri username, unique user ID, and full name.',
    },
  };

</script>
